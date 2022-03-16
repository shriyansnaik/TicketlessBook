import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  Button,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Label} from './common/LoginCommon';
import IconText from './common/IconText';

function TourDetails({route, navigation}) {
  const {image,heading,description,price} = route.params
  const [numberOfLines, setNumberOfLines] = useState(3);
  
  return (
    <View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 40,
            width: 40,
            borderRadius: 30,
            position: 'absolute',
            zIndex: 1,
            left: 30,
            top: 30,
            backgroundColor: '#ffffff90',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../assets/Icons/back.png')}
            style={{
              width: 35,
              height: 35,
            }}
          />
        </TouchableOpacity>
        <Image
          source={image}
          style={{
            width: 380,
            height: 350,
            resizeMode: 'cover',
            alignSelf: 'center',
            marginTop: 15,
            borderRadius: 25,
          }}
        />
        <View style={{padding: 20}}>
          <Label
            text={heading}
            textSize={50}
            textColor="#000000"
            textWeight={500}
          />
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <IconText icon={require('../assets/Icons/map.png')} text="Maps" />
            <IconText icon={require('../assets/Icons/food.png')} text="Food" />
            <IconText
              icon={require('../assets/Icons/tour-guide.png')}
              text="Tour Guide"
            />
          </View>
          <View style={{marginTop: 20}}>
            <Label
              text="Description"
              textSize={16}
              textWeight={600}
              textColor="#000000"
            />
            <Label
              text={description}
              textSize={16}
              textWeight={600}
              style={{marginTop: 15}}
              textColor={'#00000070'}
              numberOfLines={numberOfLines}
            />
            {numberOfLines > 5 ? (
              <TouchableOpacity
                style={{marginBottom: 50}}
                onPress={() => setNumberOfLines(3)}>
                <Label
                  text="Show Less"
                  textSize={16}
                  textWeight={600}
                  textColor="blue"
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{marginBottom: 50}}
                onPress={() => setNumberOfLines(50)}>
                <Label
                  text="Show More"
                  textSize={16}
                  textWeight={600}
                  textColor="blue"
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#f2f2f2',
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: 65,
          elevation: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 15,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Label
            text={'₹ '}
            textSize={24}
            textWeight={600}
            textColor="#ff8f0b"
          />
          <Label
            text={price}
            textSize={24}
            textWeight={600}
            textColor="#000000"
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#fe2352',
            height: 50,
            width: 200,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Label text="Continue" textColor={'#ffffff'} textSize={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default TourDetails;

{
  /* <Modal
          style={{bottom: 0}}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}>
          <ScrollView
            style={{
              backgroundColor: '#b16c33',
              width: '100%',
              height: 40,
              marginTop: 200,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              elevation: 5,
              alignSelf: 'center',
              paddingHorizontal: 40,
              paddingTop: 20,
            }}>
            <Text
              style={{
                fontFamily: 'times-new-roman',
                fontSize: 50,
                color: '#ffffff',
              }}>
              Taj Mahal
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#ffffff',
                marginVertical: 10,
                fontFamily: 'times-new-roman',
              }}>
              {'₹' + '120' + '/person'}
            </Text>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{marginTop: 15}}
              ListEmptyComponent={
                <Text
                  style={{fontSize: 20, color: '#ffffff', marginVertical: 10}}>
                  {'No additional images yet'}
                </Text>
              }
              horizontal={true}
              scrollEnabled={false}
              data={DATA.slice(0, 4)}
              renderItem={item => {
                return (
                  <>
                    <Image
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: 150 / 2,
                        marginRight: 12,
                      }}
                      source={item.item.source}
                    />
                  </>
                );
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#ffffff',
                marginVertical: 10,
                fontFamily: 'times-new-roman',
              }}>
              The Taj Mahal is an ivory-white marble mausoleum on the right bank
              of the river Yamuna in the Indian city of Agra. It was commissioned
              in 1632 by the Mughal emperor Shah Jahan (r. 1628–1658) to house the
              tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of
              Shah Jahan himself.
            </Text>
          </ScrollView>
        </Modal> */
}
{
  /* <SwipeUpDownModal
          modalVisible={modalVisible}
          // PressToanimate={animateModal}
          ContentModal={
            <ScrollView
              style={{
                backgroundColor: '#b16c33',
                width: '100%',
                height: 40,
                marginTop: 200,
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                elevation: 5,
                alignSelf: 'center',
                paddingHorizontal: 40,
                paddingTop: 20,
              }}>
              <Text
                style={{
                  fontFamily: 'times-new-roman',
                  fontSize: 50,
                  color: '#ffffff',
                }}>
                Taj Mahal
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  marginVertical: 10,
                  fontFamily: 'times-new-roman',
                }}>
                {'₹' + '120' + '/person'}
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginTop: 15}}
                ListEmptyComponent={
                  <Text
                    style={{fontSize: 20, color: '#ffffff', marginVertical: 10}}>
                    {'No additional images yet'}
                  </Text>
                }
                horizontal={true}
                scrollEnabled={false}
                data={DATA.slice(0, 4)}
                renderItem={item => {
                  return (
                    <>
                      <Image
                        style={{
                          height: 70,
                          width: 70,
                          borderRadius: 150 / 2,
                          marginRight: 12,
                        }}
                        source={item.item.source}
                      />
                    </>
                  );
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: '#ffffff',
                  marginVertical: 10,
                  fontFamily: 'times-new-roman',
                  marginBottom: 30
                }}>
                The Taj Mahal is an ivory-white marble mausoleum on the right bank
                of the river Yamuna in the Indian city of Agra. It was
                commissioned in 1632 by the Mughal emperor Shah Jahan (r.
                1628–1658) to house the tomb of his favourite wife, Mumtaz Mahal;
                it also houses the tomb of Shah Jahan himself.
              </Text>
      
            </ScrollView>
          }
          onRequestClose={() => {
            setModalVisible(false);
          }}
        /> */
}
