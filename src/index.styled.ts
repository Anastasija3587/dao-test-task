import styled from 'styled-components';

export const Wrap = styled.div`
  padding-top: 30px;
  background: #e5e5e5;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin: auto;
  @media (min-width: 768px) {
    width: 400px;
  }
`;

export const Table = styled.div`
  background: #ffffff;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  border-radius: 16px;
  width: 300px;
  margin: auto;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.75);
  padding-bottom: 30px;
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  text-align: right;
  color: #999999;
`;

export const Title = styled.p`
  font-size: 18px;
  text-align: right;
  color: #000000;
`;

export const Span = styled.span`
  font-size: 24px;
  text-align: right;
  color: #000000;
  margin-right: 30px;
`;

export const Btn = styled.button`
  width: 137px;
  height: 48px;
  background: #6ca22c;
  border-radius: 8px;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
`;
