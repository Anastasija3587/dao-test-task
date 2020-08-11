import React, { useState } from 'react';
import {
  Container,
  Table,
  Wrap,
  Title,
  Text,
  Btn,
  Span,
  Wrapper,
} from './index.styled';

enum Price {
  BIG = '500грн',
  STANDARD = '150грн',
  SMALL = '90грн',
}

const TestApp = (): JSX.Element => {
  const [item, setItem] = useState('');
  const [sum, setSum] = useState(0);

  const handleSubmit = (): void => {
    item ? setSum(sum + parseInt(item, 10)) : alert('Виберіть товар!');
  };

  const choose = (event: any): void => {
    setItem(event.target.value);
  };

  return (
    <Wrap>
      <Table>
        <Wrapper>
          <div>
            <Container>
              <Title>Тип</Title>
              <Title>Ціна</Title>
            </Container>
            <Container>
              <Text>
                <input
                  type="radio"
                  id="big"
                  name="price"
                  value={Price.BIG}
                  onClick={event => choose(event)}
                />
                500г
              </Text>
              <Text>{Price.BIG}</Text>
            </Container>
            <Container>
              <Text>
                <input
                  type="radio"
                  id="standard"
                  name="price"
                  value={Price.STANDARD}
                  onClick={event => choose(event)}
                />
                100г
              </Text>
              <Text>{Price.STANDARD}</Text>
            </Container>
            <Container>
              <Text>
                <input
                  type="radio"
                  id="small"
                  name="price"
                  value={Price.SMALL}
                  onClick={event => choose(event)}
                />
                50г
              </Text>
              <Text>{Price.SMALL}</Text>
            </Container>
          </div>
        </Wrapper>
        <div style={{ textAlign: 'center' }}>
          <Span>{sum}грн</Span>
          <Btn type="button" onClick={handleSubmit}>
            До кошика
          </Btn>
        </div>
      </Table>
    </Wrap>
  );
};

export default TestApp;
