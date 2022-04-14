import React from 'react';
import {StyleSheet, SectionList} from 'react-native';
import {PostListItem, ProfileItemHeader} from 'components';

export const PostsScreen = ({componentId}) => {
  function renderItem({item}) {
    return <PostListItem {...item} componentId={componentId} />;
  }

  function renderSectionHeader({section: {title}}) {
    return <ProfileItemHeader title={title} />;
  }

  return (
    <SectionList
      style={styles.container}
      sections={posts}
      keyExtractor={item => item.title}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

const posts = [
  {
    title: 'INFLUENCER CAMPAIGNS',
    data: [
      {
        title: 'Upload progress',
        first: true,
      },
      {
        title: 'Pending',
      },
      {
        title: 'Pre-Approved',
      },
      {
        title: 'Approved',
      },
      {
        title: 'Published',
      },
      {
        title: 'Withdrawn',
      },
      {
        title: 'Declined',
        last: true,
      },
    ],
  },
  {
    title: 'CONTENT CAMPAIGNS',
    data: [
      {
        title: 'Pending',
        first: true,
      },
      {
        title: 'Sold',
      },
      {
        title: 'Withdrawn',
      },
      {
        title: 'Declined',
        last: true,
      },
    ],
  },
  {
    title: 'CONTENT RIGHTS',
    data: [
      {
        title: 'Requested',
        first: true,
      },
      {
        title: 'Accepted',
      },
      {
        title: 'Sold',
      },
      {
        title: 'Declined',
        last: true,
      },
    ],
  },
];
