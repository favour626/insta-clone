import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Story from "../components/Story";
import Post from "../components/Post";
import { POSTS } from "../data/posts";
import BottomTabs from "../components/BottomTabs";
import { bottomTabIcons } from "../data/bottomTabIcons";
import { USERS } from "../data/users";


const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Story />
      <ScrollView vertical showsVerticalScrollIndicator={false} style={{ height: '71%'}}>
        {POSTS.map((item, index) => (
          <Post
            pfp={item.pfp}
            user={item.user}
            imageUrl={item.imageUrl}
            likes={item.likes}
            comment={item.comments}
            key={index}
          />
        ))}
      </ScrollView>
      <BottomTabs bottomTabIcons={bottomTabIcons} user={USERS[0]} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
