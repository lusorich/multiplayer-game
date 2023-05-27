import { Request, Response } from 'express';

import { Topic } from '../../db';

export const createTopic = (req: Request, res: Response) => {
  const { name, author, content } = req.body;

  if (!name || !author) {
    return res
      .status(400)
      .send({ message: 'name и author обязательные параметры' });
  }

  return Topic.create({ name, author, content })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Произошла ошибка при создании темы',
      });
    });
};

export const getTopics = (_req: Request, res: Response) => {
  Topic.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Произошла ошибка при получении тем форума',
      });
    });
};

export const updateTopic = (req: Request, res: Response) => {
  const { name, author, reactions, content, id } = req.body;

  Topic.update(
    { name, author, reactions, content },
    {
      where: { id },
    }
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Произошла ошибка при обновлении темы форума',
      });
    });
};

export const updateTopicReactions = (req: Request, res: Response) => {
  const { id, reactions } = req.body;

  Topic.update(
    { reactions },
    {
      where: { id },
    }
  )
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Произошла ошибка при обновлении реакций темы форума',
      });
    });
};

export const deleteTopic = (req: Request, res: Response) => {
  const { id } = req.params;

  Topic.destroy({
    where: { id },
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Произошла ошибка при удалении топика',
      });
    });
};
