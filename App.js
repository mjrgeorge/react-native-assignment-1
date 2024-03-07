import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://cameronmcefee.com/img/work/the-octocat/original.jpg' }}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>The Octocat</Text>
          <Text style={styles.username}>@octocat</Text>
          <Text style={styles.description}>The Octocat</Text>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={{ color: 'gray', fontSize: 16 }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore excepturi cum suscipit. Explicabo, porro voluptatem!
        </Text>
      </View>
      <View style={{ backgroundColor: '#F6F8FF', flexDirection: 'row', padding: 10, borderRadius: 10 }}>
        <View style={{ padding: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 10 }}>
            Repos
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 10, fontWeight: 'bold' }}>
            8
          </Text>
        </View>
        <View style={{ padding: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 10 }}>
            Followers
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 10, fontWeight: 'bold' }}>
            8
          </Text>
        </View>
        <View style={{ padding: 10, flex: 1 }}>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 10 }}>
            Flowing
          </Text>
          <Text style={{ fontSize: 16, textAlign: 'center', paddingBottom: 10, fontWeight: 'bold' }}>
            9
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#758DB2',
    padding: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#4495FF',
  },
  description: {
    fontSize: 14,
  },
});
