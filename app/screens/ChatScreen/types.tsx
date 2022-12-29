export type messageType = {
  text: string,
  time: string,
};

export type itemType = {
  id: string,
  name: string,
  messages: messageType[]
};

export type chatType = {
  item: itemType
};