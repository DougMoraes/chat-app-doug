import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../types";

export type messagingScreenProps = NativeStackScreenProps<RootStackParamList, 'Messaging'>;
export type messageItem = {
  id: string;
  text: string;
  time: string;
  user: string;
};
export type messageProps = {
  item: messageItem,
  user: string,
};

