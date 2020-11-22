import React, { useEffect } from 'react';
import {
  Image, ScrollView, TouchableWithoutFeedback, TouchableHighlight, View, StyleSheet,
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
    left: '0.8%',
    top: '5%',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%', // is 50% of container width
    flex:1,
    padding:5
  },
  listBook: {
    top: 11,
  },
  styleImage : {
    flex: 2,
    justifyContent: 'space-between',
    width: 170,
    height: 190
  }
});

function FavorisScreen() {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = (query) => setSearchQuery(query);
  const [modalbool, setModelbool] = React.useState(false);
  const [data, setData] = React.useState(null);
  const token = useSelector((state) => state.userReducer.user.token);
  const favoris = useSelector((state) => state.bookReducer.book.favoris);
  console.log('Favoris===', favoris);
  const user = useSelector((state) => state.userReducer.user);
  const idUser = user.userInfo.user.id;

  useEffect(() => {
    dispatch(Actions.getFavoris(token, idUser));
  }, [token, idUser]);

  const onPressModal = (element) => {
    setData(element);
    setModelbool(true);
  };

  const onCloseModal = () => {
    setModelbool(false);
  };

  const displayFavoris = (() => {
    console.log(favoris);
    if (favoris !== null) {
      let keymap = 0;
      const booksDisplayer = favoris.map((element) => {
        let imgUrl;
        keymap += 1;
        if (element.book.img.irl !== null) {
          imgUrl = { uri: element.book.img.url };
        } else {
          imgUrl = { uri: 'https://i.pinimg.com/originals/6f/11/c5/6f11c51b8efb2c82af6c605e9321e766.jpg' };
        }
        return (
          <View key={keymap}>
            <TouchableHighlight onPress={() => onPressModal(element.book)}>
              <View style={styles.item}>
                <Image source={imgUrl} style={styles.styleImage} />
              </View>
            </TouchableHighlight>
          </View>
        );
      });
      return booksDisplayer;
    }
    console.log(favoris, 'ISFAVORIS THE BEST ???');
    return null;
  });

  return (
    <>
      { (modalbool === true)
        ? <BookDialog display={modalbool} onClose={onCloseModal} data={data} /> : null }

      <ScrollView>
        <View style={[styles.listBook]}>
          <View style={[styles.container]}>
            {displayFavoris()}
          </View>
        </View>
      </ScrollView>
    </>
  );
}

export default FavorisScreen;
