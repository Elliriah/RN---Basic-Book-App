import React, { useEffect } from 'react';
import {
  Image, ScrollView, TouchableHighlight, View, StyleSheet,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Searchbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import BookDialog from './component/bookDialog';
import * as Actions from './store/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    left: '2%',
    top: '5%',
    alignItems: 'flex-start'// if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width
    flex:1,
    padding:5
  },
  listBook: {
    top: 11,
  },
  imageHome : {
    flex: 2,
    justifyContent: 'space-between',
    width: 170,
    height: 190
  }
});

function HomeScreen() {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const [modalbool, setModelbool] = React.useState(false);
  const [data, setData] = React.useState(null);
  const token = useSelector((state) => state.userReducer.user.token);
  const books = useSelector((state) => state.bookReducer.book.books);

  useEffect(() => {
    dispatch(Actions.getBooks(token));
  }, [token]);

  const onPressModal = (element) => {
    setData(element);
    setModelbool(true);
  };

  const onCloseModal = () => {
    setModelbool(false);
  };

  const displayBook = (() => {
    if (books !== null) {
      let keymap = 0;
      const booksDisplayer = books.map((element) => {
        let imgUrl;
        keymap += 1;
        if (element.img.irl !== null) {
          imgUrl = { uri: element.img.url };
        } else {
          imgUrl = { uri: 'https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg' };
        }
        return (
          <View key={keymap}>
            <TouchableHighlight onPress={() => onPressModal(element)}>
              <View style={styles.item}>
                <Image
                  source={imgUrl}
                  style={styles.imageHome}
                />
              </View>
            </TouchableHighlight>
          </View>
        );
      });
      return booksDisplayer;
    }
    return null;
  });

  return (
    <>
      { (modalbool === true)
        ? <BookDialog display={modalbool} onClose={onCloseModal} data={data} /> : null }

      <ScrollView>
        <View>
          <View style={[styles.container]}>
            {displayBook()}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
