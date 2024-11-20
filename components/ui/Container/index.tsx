import type { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface IFlexboxProps {
  gap?: number;
  flexWrap?: 'wrap' | 'nowrap';
  flexDirection?: 'row' | 'column';
  alignSelf?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
}

interface IContainerProps extends IFlexboxProps {
  children?: ReactNode | ReactNode[];
  style?: StyleProp<ViewStyle>;
}

const generateFlexboxStyles = (props: IFlexboxProps) => StyleSheet.create({
  main: { ...props },
});

const Container = ({ children, style, ...flexProps }: IContainerProps) => (
  <View style={[generateFlexboxStyles(flexProps).main, style]}>
    {children}
  </View>
);

export default Container;
