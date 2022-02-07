interface Props {
  children: React.ReactNode;
}

const RequiredMessage = ({ children }: Props) => {
  return (
    <p className='error'>
      {children}
    </p>
  );
};

export default RequiredMessage;
