import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType; // special built-in type in react. It simply means that the value should be some valid identifier of a component
};

export default function Container({ as }: ContainerProps) {
  // it should be with capital letter in order to use it as a component in JSX in the end
  const Component = as;
  return <Component />;
}
