import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Divider} from 'react-native-elements';
import {POSTS} from '../../data/Post';
import whitelike from '../../assets/Likewhite.png';
import redWhite from '../../assets/redLike.png';
import comment from '../../assets/bubblecomment.png';
import share from '../../assets/rocketshare.png';
import save from '../../assets/save.png';
const postFotterIcons = [
  {
    name: 'like',
    imageUrl: whitelike,
    likedimgUrl: redWhite,
  },
  {
    name: 'Comment',
    imageUrl: comment,
  },
  {
    name: 'Share',
    imageUrl: share,
  },
  {
    name: 'Save',
    imageUrl: save,
  },
];
const PostHeader = ({post}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}>
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Image source={post.profile_picture} style={styles.story} />
      <Text style={{color: 'white', marginLeft: 5, fontWeight: '700'}}>
        {post.user}
      </Text>
    </View>
    <Text style={{color: 'white', fontWeight: '900', marginRight: 5}}>...</Text>
  </View>
);
const PostImage = ({post}) => (
  <View>
    <Image
      source={{uri: post.imageUrl}}
      style={{width: 360, height: 350, resizeMode: 'cover'}}
    />
  </View>
);
const PostFooter = ({post}) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
    <View style={styles.leftFooterCon}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFotterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFotterIcons[1].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFotterIcons[2].imageUrl} />
    </View>
    <View>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFotterIcons[3].imageUrl} />
    </View>
  </View>
);
const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={imgUrl} />
  </TouchableOpacity>
);
const Likes = ({post}) => (
  <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: 'white', fontWeight: '600'}}>
      {post.likes.toLocaleString('en')} likes
    </Text>
  </View>
);
const Caption = ({post}) => (
  <View style={{marginTop: 5}}>
    <Text style={{color: 'white'}}>
      <Text style={{fontWeight: '600'}}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);
const CommentSection = ({post}) => (
  <View style={{marginTop: 5}}>
    {!!post.comments.length && (
      <Text style={{color: 'gray'}}>
        View {post.comments.length > 1 ? 'all ' : ''}
        {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments' : 'comment'}
      </Text>
    )}
  </View>
);
const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{flexDirection: 'row', marginTop: 5}}>
        <Text style={{color: 'white'}}>
          <Text style={{fontWeight: '600'}}>{comment.user}</Text>{' '}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
const Post = ({post}) => {
  console.log(post);
  return (
    <View style={{marginBottom: 30}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  leftFooterCon: {
    flexDirection: 'row',
    width: '32%',
    justifyContent: 'space-between',
  },
});
