import React from 'react';
import {Button, View, SafeAreaView, StyleSheet} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';

const CONNECTION = {
  appId: 'b253b5bf28d043c49e67747bf16077e8',
  channel: 'test',
  token: null,
};

const App = () => {
  const [isJoined, setIsJoined] = React.useState(false);

  const join = () => {
    setIsJoined(true);
  };

  const rtcCallbacks = {
    EndCall: () => {
      setIsJoined(false);
    },
  };

  const rtmCallbacks = {
    ConnectionStateChanged: (state, reason) =>
      console.log('CONNECTION STATE CHANGED', state, reason),
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        {!isJoined && <Button title="Join" onPress={join} />}
        {isJoined && (
          <View style={styles.container}>
            <AgoraUIKit
              connectionData={CONNECTION}
              rtcCallbacks={rtcCallbacks}
              rtmCallbacks={rtmCallbacks}
            />
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
