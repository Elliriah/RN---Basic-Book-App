src = [
    'src/main.c',
    'src/cli.c',
    'src/command.c',
    'src/control_msg.c',
    'src/controller.c',
    'src/decoder.c',
    'src/device.c',
    'src/device_msg.c',
    'src/event_converter.c',
    'src/file_handler.c',
    'src/fps_counter.c',
    'src/input_manager.c',
    'src/opengl.c',
    'src/receiver.c',
    'src/recorder.c',
    'src/scrcpy.c',
    'src/screen.c',
    'src/server.c',
    'src/stream.c',
    'src/tiny_xpm.c',
    'src/video_buffer.c',
    'src/util/net.c',
    'src/util/str_util.c'
]

if not get_option('crossbuild_windows')

    # native build
    dependencies = [
        dependency('libavformat'),
        dependency('libavcodec'),
        dependency('libavutil'),
        dependency('sdl2'),
    ]

else

    # cross-compile mingw32 build (from Linux to Windows)
    cc = meson.get_compiler('c')

    prebuilt_sdl2 = meson.get_cross_property('prebuilt_sdl2')
    sdl2_bin_dir = meson.current_source_dir() + '/../prebuilt-deps/' + prebuilt_sdl2 + '/bin'
    sdl2_lib_dir = meson.current_source_dir() + '/../prebuilt-deps/' + prebuilt_sdl2 + '/lib'
    sdl2_include_dir = '../prebuilt-deps/' + prebuilt_sdl2 + '/include'

    sdl2 = declare_dependency(
        dependencies: [
            cc.find_library('SDL2', dirs: sdl2_bin_dir),
            cc.find_library('SDL2main', dirs: sdl2_lib_dir),
        ],
        include_directories: include_directories(sdl2_include_dir)
    )

    prebuilt_ffmpeg_shared = meson.get_cross_property('prebuilt_ffmpeg_shared')
    prebuilt_ffmpeg_dev = meson.get_cross_property('prebuilt_ffmpeg_dev')
    ffmpeg_bin_dir = meson.current_source_dir() + '/../prebuilt-deps/' + prebuilt_ffmpeg_shared + '/bin'
    ffmpeg_include_dir = '../prebuilt-deps/' + prebuilt_ffmpeg_dev + '/include'
    ffmpeg = declare_dependency(
        dependencies: [
            cc.find_library('avcodec-58', dirs: ffmpeg_bin_dir),
            cc.find_library('avformat-58', dirs: ffmpeg_bin_dir),
            cc.find_library('avutil-56', dirs: ffmpeg_bin_dir),
        ],
        include_directories: include_directories(ffmpeg_include_dir)
    )

    dependencies = [
        ffmpeg,
        sdl2,
        cc.find_library('mingw32')
    ]

endif

cc = meson.get_compiler('c')

if host_machine.system() == 'windows'
    src += [ 'src/sys/win/command.c' ]
    dependencies += cc.find_library('ws2_32')
else
    src += [ 'src/sys/unix/command.c' ]
endif

conf = configuration_data()

# expose the build type
conf.set('NDEBUG', get_option('buildtype') != 'debug')

# the version, updated on release
conf.set_quoted('SCRCPY_VERSION', meson.project_version())

# the prefix used during configuration (meson --prefix=PREFIX)
conf.set_quoted('PREFIX', get_option('prefix'))

# build a "portable" version (with scrcpy-server accessible from the same
# directory as the executable)
conf.set('PORTABLE', get_option('portable'))

# the default client TCP port range for the "adb reverse" tunnel
# overridden by option --port
conf.set('DEFAULT_LOCAL_PORT_RANGE_FIRST', '27183')
conf.set('DEFAULT_LOCAL_PORT_RANGE_LAST', '27199')

# the default max video size for both dimensions, in pixels
# overridden by option --max-size
conf.set('DEFAULT_MAX_SIZE', '0')  # 0: unlimited

# the default video orientation
# natural device orientation is 0 and each increment adds 90 degrees
# counterclockwise
# overridden by option --lock-video-orientation
conf.set('DEFAULT_LOCK_VIDEO_ORIENTATION', '-1')  # -1: unlocked

# the default video bitrate, in bits/second
# overridden by option --bit-rate
conf.set('DEFAULT_BIT_RATE', '8000000')  # 8Mbps

# enable High DPI support
conf.set('HIDPI_SUPPORT', get_option('hidpi_support'))

# disable console on Windows
conf.set('WINDOWS_NOCONSOLE', get_option('windows_noconsole'))

# run a server debugger and wait for a client to be attached
conf.set('SERVER_DEBUGGER', get_option('server_debugger'))

# select the debugger method ('old' for Android < 9, 'new' for Android >= 9)
conf.set('SERVER_DEBUGGER_METHOD_NEW', get_option('server_debugger_method') == 'new')

configure_file(configuration: conf, output: 'config.h')

src_dir = include_directories('src')

if get_option('windows_noconsole')
    link_args = [ '-Wl,--subsystem,windows' ]
else
    link_args = []
endif

executable('scrcpy', src,
           dependencies: dependencies,
           include_directories: src_dir,
           install: true,
           c_args: [],
           link_args: link_args)

install_man('scrcpy.1')


### TESTS

# do not build tests in release (assertions would not be executed at all)
if get_option('buildtype') == 'debug'
    tests = [
        ['test_buffer_util', [
            'tests/test_buffer_util.c'
        ]],
        ['test_cbuf', [
            'tests/test_cbuf.c',
        ]],
        ['test_cli', [
            'tests/test_cli.c',
            'src/cli.c',
            'src/util/str_util.c',
        ]],
        ['test_control_msg_serialize', [
            'tests/test_control_msg_serialize.c',
            'src/control_msg.c',
            'src/util/str_util.c',
        ]],
        ['test_device_msg_deserialize', [
            'tests/test_device_msg_deserialize.c',
            'src/device_msg.c',
        ]],
        ['test_queue', [
            'tests/test_queue.c',
        ]],
        ['test_strutil', [
            'tests/test_strutil.c',
            'src/util/str_util.c',
        ]],
    ]

    foreach t : tests
        exe = executable(t[0], t[1],
                         include_directories: src_dir,
                         dependencies: dependencies,
                         c_args: ['-DSDL_MAIN_HANDLED', '-DSC_TEST'])
        test(t[0], exe)
    endforeach
endif
