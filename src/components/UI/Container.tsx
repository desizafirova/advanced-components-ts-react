import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

// ElementType - a special built-in type in react. It simply means that the value should be some valid identifier of a component
type ContainerProps<T extends ElementType> = {
  //adding some placeholder as a T that will accept the identifier of the as property. So we can use it down on ComponentPropsWithoutRef<>. With this extends we are saying that ContainerProps should be used with some type that will be defined at the point of time, where we are using this ContainerProps type.
  as?: T;
  children: ReactNode; // it means that children should get some JSX code
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  // it should be with capital letter in order to use it as a component in JSX in the end
  const Component = as || 'div';
  return <Component {...props}>{children}</Component>;
}
