import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';
import React from 'react';
import { useRouter } from 'next/router';

function Titulo(props) {
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
          }
        `}
      </style>
    </>
  );
}

/* function HomePage() {
  return (
    <div>
      <GlobalStyle />
      <Titulo tag="h2">Boas vindas de volta!</Titulo>
      <h2>Discord - Alura Matrix</h2>
    </div>
  );
}

export default HomePage; */

export default function PaginaInicial() {
  const [input, setInput] = React.useState('Adrianodisam');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          backgroundImage:
            'url(https://www.meioemensagem.com.br/wp-content/uploads/2020/04/cerebro-tecnologia-Cred-MF3d-iStock-1160995648.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundBlendMode: 'multiply',
        }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%',
            maxWidth: '700px',
            borderRadius: '5px',
            padding: '32px',
            margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
        >
          {/* Formulário */}
          <Box
            onSubmit={(infosEvento) => {
              infosEvento.preventDefault();
              roteamento.push(`/chat?username=${input}`);
            }}
            as="form"
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '100%', sm: '50%' },
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: '32px',
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              Aluracord - Matrix ({input})
            </Text>

            <TextField
              value={input}
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[300],
                  mainColor: appConfig.theme.colors.neutrals[600],
                  mainColorHighlight: appConfig.theme.colors.primary[200],
                  backgroundColor: appConfig.theme.colors.neutrals[600],
                },
              }}
              onChange={({ target }) => {
                setInput(target.value);
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals['200'],
                mainColor: appConfig.theme.colors.neutrals['400'],
                mainColorLight: appConfig.theme.colors.primary[900],
                mainColorStrong: appConfig.theme.colors.neutrals[800],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${input}.png`}
            />

            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px',
              }}
            >
              {input}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
