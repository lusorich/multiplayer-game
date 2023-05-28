import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

import Emoji from '../../components/Emoji';

import { useGetTopicsQuery, useUpdateReactionsMutation } from '../../app/store/api/forum/forumApi';

import { TopicT, Comment, TEmoji } from './types';

import styles from './index.module.scss';


const emojiList = [
  {
    reaction:  '😀',
    count: 0
  },
  {
    reaction:  '👍',
    count: 0
  },
  {
    reaction: '💪',
    count: 0
  },
  {
    reaction: '👏',
    count: 0
  },
  {
    reaction: ' 💖',
    count: 0
  },
  {
    reaction: ' 👎',
    count: 0
  }
];


export function TopicPage(props: TopicT) {
  const { topic: topicMock } = props;

  const [ updateTopicReactions ] = useUpdateReactionsMutation();
  const { id } = useParams();

  const { data } = useGetTopicsQuery();

  const { comments } = topicMock;

  const topic = useMemo(() => {
    return data?.find((topic: any) => topic.id === Number(id))
  }, [data]);

  const {
    reactions,
  } = topic || {};

  const [emojis, updateEmojis] = useState(reactions || emojiList);

  const onEmojiClick = (symbol: TEmoji) => {
    const emojiIndex = emojis.findIndex(({ reaction }) => reaction === symbol.reaction);
    
    if (emojiIndex !== -1) {
      const updateEmojiCount = {
        reaction: emojis[emojiIndex].reaction,
        count: symbol.count + 1,
      }

      const newEmojis = [...emojis.slice(0, emojiIndex),
        updateEmojiCount,
        ...emojis.slice(emojiIndex + 1)
      ];
  
      updateEmojis(newEmojis);

      if (topic) {
        try {
          updateTopicReactions({
            ...topic,
            reactions: newEmojis,
          });
        } catch(error) {
          console.log(error);
        }
      }
    }
  };
  
  return (
    <div className={styles.topic}>
      <CssBaseline />
      <Container maxWidth="md" className={styles.container}>
        <h1>{topic?.name}</h1>
        <div className={styles.user}>{topic?.author}</div>
        <div className={styles.description}>{topic?.content}</div>

        <Emoji onEmojiClick={onEmojiClick} reactions={emojis} />

        <Divider className={styles.divider} />
        {comments.map((comment: Comment, index: number) => (
          <Box className={styles.comment} key={index}>
            <Avatar />
            <Box className={styles.info}>
              <div className={styles.username}>{comment.user}</div>
              <div className={styles.text}>{comment.text}</div>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
}
