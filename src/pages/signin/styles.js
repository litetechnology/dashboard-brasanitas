import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 30vw;
  border-radius: 0.75rem;
  background-color: #202020;
  padding: 2rem;
  color: rgba(243, 244, 246, 1);
`;

export const Title = styled.p`
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  span {
    text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  }
`;

export const Form = styled.form`
  margin-top: 1.5rem;
`;

export const InputGroup = styled.div`
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const Label = styled.label`
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: #101010;
  padding: 0.75rem 1rem;
  color: rgba(243, 244, 246, 1);

  &:focus {
    border-color:#066687;
  }
`;

export const Forgot = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175, 1);
  margin: 8px 0 14px 0;

  a {
    color: rgba(243, 244, 246, 1);
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline #066687;
    }
  }
`;

export const Sign = styled.button`
  display: block;
  width: 100%;
  background-image: linear-gradient(to right, #066687, #024778);
  padding: 0.75rem;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
`;

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    height: 100vh;
    display: flex;
    width: 100%;
`
