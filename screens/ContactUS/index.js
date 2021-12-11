import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';

const ContactScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Animatable.View animation="slideInDown" duration={2000}>
        <Image
          style={{width: 200, height: 200, alignSelf: 'center'}}
          source={{
            uri: 'https://cdn5.vectorstock.com/i/1000x1000/56/64/women-contact-us-vector-13255664.jpg',
          }}
        />
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={2000}>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri: 'https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png',
            }}
          />
          <Text
            style={{color: 'black', textAlign: 'center', marginVertical: 10}}>
            267 Julien Motroway ,Street 12,Johr Town Lahore267 Julien Motroway
            ,Street 12,Johr Town Lahore
          </Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="slideInRight" duration={2000}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8AgAAAfgA4jjgAeQAAfAClzaV2sXYAegAskSzE4MSgwqA7kjtBl0GhxqFbpVtRoFGt0a1InEhkqmSz1bMAgwC62br0+vTd7d3I4cjw9/D6/fqFu4XS59JysXLZ7NmYxZjp9OkgiyAzkjOhy6FapVoThhN/un+Lvot1s3Xi7+IjjSMxkjGUw5RAmkDQ4tCHomZZAAAEa0lEQVR4nO3djXKaQBiFYdnu6sbGH0QUQYwaY01s7P3fXbHT6dQCGfN5lmXseS9gwyN/y2KSTkdYmuSL/mw6DYuGf/W11PDjuuHHTX+XSLdU1Lx7Ukb/zl5kStnPpWsy3zbNAWdHrYLGs/GuIV+28uE7p8dZI8Cx9uMrsqd5A8LIegMGgWlgL4b+9uA5vXQN3Hj1nYm5Y+HKeBaqiVvgk99j9Jx+cir0vguLi43bMzHyL1SDuxd+oZBCCn1HIYX/vfDF07Nvc8IRhRRSSCGFFFL4nwqVy9og3D+4bOtfaHpOf2C39A7h7oSlBVoKb4xCeBTCG1OIjkJ4FMKjEB6F8CiERyE8CuFRCI9CeBTCoxDe/QsnFKKjEB6F8CiERyE8CuFRCI9CeBTCoxAehfAohDegEB2F8CiERyE8CuFRCI9CeBTCoxAehfAohEchvPsXPlKIjkJ4FMKjEB6F8CiERyE8CuFRCI9CeBTCoxAehfAaF36hEB2F8CiERyE8CuFRCI9CeBTCoxAehfAohEchPArhUQiPQngUwqMQHoXwKIRHITwK4VEI7/7fAVMIj0J4FMKjEB6F8CiERyE8CuFRCI9CePf/u9wUwmuBUI0WfXctvhnvwkBpl5WAHoRNRyGFFN69sPxXdimkkEIKKfxs5f9KRuHl1hmrrSnPpu9EqEw8Xq67u0O0vwXZXqEd9/8Mk0dGPFBbhSqYXgy02Ep3o2Phi1Co9sk/I6UD20rhSCZU+01pqOwk24vtFJpFxVibWCZ8dCsUfe7mtXKw8jpaC4SRSKjKx+i57Cg5ItooNKua0daSi40aOBWuJEI9qxntTTJaG4Wm+iDtdOYPgsPUsbAnEW7ndcNJbq9q0jqhes7qhpOc1mrsVFh+jXDFJg1qhZKD3rFwid2HkgmEY+FBch7Gac1omWT5VY2cCkV3MJ3XjJZK5m0mcioMJRMt+14zWl8yWu38AVMu2SZ1rDkRRTMk23UqzETPA3paOVgimuTqJ6dC4dR7X3nPH4smbXu3wM5M9MRjqq7wB9FQ9uBYmO1Fz8B6VToVd7JVDPPmWNhZiz75wA4up99ZTzaO43vFuflWuJARr/+68U+/S9ehHF9nfm2c7MMvdmMchfkmTZ9mr1srXLPTS/dA6eX0nNFa28ovyVzZB1NcZHPZxQaR+nfV1VFJ4IlYuxwCb+GHaMOmgMX0NG6eqFT13M9RyYPwai/OxFXr5g6bR9Kbhiw9qVuwc9c0vu1d7mcywa5xX1H6qpoxGhM5n4zWlETym/f1Pj2pWwVpxqikE7CrUsa++PSd27w/G0dIZcxx6ev4vChfPluNRiqrt71FI9PQa8qS3SguZtQgpjLanA557esOT2V5GB2L88aom75zY60JTod+83e/K0vzcDl63KviKamQXk1VxSlXPFYF20n0Pmvo+eGWsvTtR/j+Gk2OsTo/Eupiv1Rm7a9fqVDxwzjqrWfJW93yf2vLsjTJF7OwO/xa2XAYzhZ5kmYuLyg/AfpVhVL2JB86AAAAAElFTkSuQmCC',
            }}
          />
          <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>
            (+92) 0302-4672370
          </Text>
          <Text style={{color: 'black', textAlign: 'center'}}>
            (+92) 0302-4672370
          </Text>
        </View>
      </Animatable.View>

      <Animatable.View animation="slideInUp" duration={2000}>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri: 'data:image/png;base64,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',
            }}
          />
          <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>
            Monday-Friday
          </Text>
          <Text style={{color: 'black', textAlign: 'center'}}>9am-5pm</Text>
          <Text style={{color: 'black', textAlign: 'center'}}>
            Satuday-Sunday
          </Text>
          <Text style={{color: 'black', textAlign: 'center'}}>9am-12pm</Text>
        </View>
      </Animatable.View>
      <Animatable.View animation="slideInLeft" duration={2000}>
        <View style={{marginVertical: 20, alignItems: 'center'}}>
          <Image
            style={{width: 30, height: 30}}
            source={{
              uri: 'https://www.pngkit.com/png/detail/266-2667948_contact-email-icon-email-icon-green-png.png',
            }}
          />
          <Text style={{color: 'black', textAlign: 'center', marginTop: 10}}>
            mujahid.ali@pikessoft.com
          </Text>
          <Text style={{color: 'black', textAlign: 'center'}}>
            mujahidali6612@gmail.com
          </Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
