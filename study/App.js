import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';

export default function App() {
  const [data, setData] = useState([]); //데이터가 들어가기 위해 []사용
  const [loading, setLoading] = useState(true);

  // 데이터를 가져오는 함수
  const fetchData = async () => {
    try {
      // API 호출을 시뮬레이션하기 위한 타임아웃
      setTimeout(() => {
        const sampleData = [
          {id: '1', name: 'Item 1', description: 'This is item 1'},
          {id: '2', name: 'Item 2', description: 'This is item 2'},
          {id: '3', name: 'Item 3', description: 'This is item 3'},
          {id: '4', name: 'Item 4', description: 'This is item 4'},
          {id: '5', name: 'Item 5', description: 'This is item 5'},
          {id: '6', name: 'Item 6', description: 'This is item 6'},
          {id: '7', name: 'Item 7', description: 'This is item 7'},
          {id: '8', name: 'Item 8', description: 'This is item 8'},
          {id: '9', name: 'Item 9', description: 'This is item 9'},
          {id: '10', name: 'Item 10', description: 'This is item 10'},
          {id: '11', name: 'Item 11', description: 'This is item 11'},
          {id: '12', name: 'Item 12', description: 'This is item 12'},
          {id: '13', name: 'Item 13', description: 'This is item 13'},
          {id: '14', name: 'Item 14', description: 'This is item 14'},
          {id: '15', name: 'Item 15', description: 'This is item 15'},
          {id: '16', name: 'Item 16', description: 'This is item 16'},
          {id: '17', name: 'Item 17', description: 'This is item 17'},
          {id: '18', name: 'Item 18', description: 'This is item 18'},
          {id: '19', name: 'Item 19', description: 'This is item 19'},
          {id: '20', name: 'Item 20', description: 'This is item 20'},
          {id: '21', name: 'Item 21', description: 'This is item 21'},
          {id: '22', name: 'Item 22', description: 'This is item 22'},
          {id: '23', name: 'Item 23', description: 'This is item 23'},
        ];
        setData(sampleData);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 각 아이템을 렌더링하는 함수
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
    </View>
  );

  // 로딩 중일 때 로딩 스피너를 표시
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    borderRadius: 10,
    justifyContent: 'center',
    margin: 20,
    backgroundColor: 'gray',
  },
  itemName: {
    fontSize: 25,
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'black',
  },
  itemDescription: {
    fontSize: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'black',
  },
});
