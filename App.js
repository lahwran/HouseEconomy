import React, { Component } from 'react';
import { FlatList, ViewPagerAndroid, ScrollView, Alert, Button, AppRegistry, Image, StyleSheet, Text, View, TextInput } from 'react-native';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAXB9xiGvk8W1XhPEYnuXgvMmZKhi4FYds",
    authDomain: "economics-6ac47.firebaseapp.com",
    databaseURL: "https://economics-6ac47.firebaseio.com",
    projectId: "economics-6ac47",
    storageBucket: "economics-6ac47.appspot.com",
    messagingSenderId: "159174043435"
};
firebase.initializeApp(config);

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}</Text>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.showText ? this.props.text : '';
        return <Text>{display}</Text>;
    }
}

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}

class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
            return (
                <ScrollView>
                    <Text style={{fontSize:96}}>Scroll me plz</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:96}}>If you like</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:96}}>Scrolling down</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:96}}>What's the best</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:96}}>Framework around?</Text>
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Image source={require('./img/favicon.png')} />
                    <Text style={{fontSize:80}}>React Native</Text>
                </ScrollView>
        );
    }
}

export default class HelloWorldApp extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        /*
        return (
            <View style={styles.container}>
            </View>
            );*/
        return (
            // Try removing the `flex: 1` on the parent View.
            // The parent will not have dimensions, so the children can't expand.
            // What if you add `height: 300` instead of `flex: 1`?
            <ViewPagerAndroid style={{flex: 1}}>
                <View style={{padding: 30, alignItems: 'center', flex: 1}}>
                    <FlatList
                        data={[
                            {key: 'Devin'},
                            {key: 'Jackson'},
                            {key: 'James'},
                            {key: 'Joel'},
                            {key: 'John'},
                            {key: 'Jillian'},
                            {key: 'Jimmy'},
                            {key: 'Julie'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
                </View>
                <View style={{flex: 1, padding: 30}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue', padding: 10}}>
                        <Button onPress={() => { Alert.alert('You tapped the button!')}}
                            title="Press me"/>
                    </View>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}}>
                        <PizzaTranslator/>
                        <IScrolledDownAndWhatHappenedNextShockedMe/>
                    </View>
                    <View style={{flex: 3, backgroundColor: 'steelblue'}}>
                        <Text>This is the expo app, which connects</Text>
                        <Text style={styles.red}>to the react native dev server over wifi</Text>
                        <Text style={styles.bigblue}>hi phoenix</Text>
                        <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                        <Image source={pic} style={{width: 193, height: 110}}/>
                        <Greeting name='charlie'/>
                    </View>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
    buttonContainer: {
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
