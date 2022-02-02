import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/router';
import { ButtonSendSticker } from '../src/componentes/ButtonSendSticker';

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzY1ODMzNCwiZXhwIjoxOTU5MjM0MzM0fQ.FnN8bvy8qU2dT3NGDzk3JXxvhZoKo1Qr886jgf-RLSU';
const SUPABASE_URL = 'https://krnkenzdoqftoaowuhjk.supabase.co';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
  const [mensagem, setMensagem] = React.useState('');
  const roteamento = useRouter();
  const usuarioLogado = roteamento.query.username;
  console.log(usuarioLogado);
  const [listaMensagem, setListamensagem] = React.useState([
    /* {
      id: 1,
      texto:
        ':sticker: https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png',
      de: 'adrianodisam',
    },
    {
      id: 2,
      texto: 'como vai',
      de: 'alura',
    }, */
  ]);
  React.useEffect(() => {
    supabase
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        console.log(data);
        setListamensagem(data);
      });
  }, []);

  // Sua lógica vai aqui
  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      /*   id: listaMensagem.length + 1, */
      de: usuarioLogado,
      texto: novaMensagem,
    };
    supabase
      .from('mensagens')
      .insert([mensagem])
      .then(({ data }) => {
        setListamensagem([data[0], ...listaMensagem]);
      });

    setMensagem('');
  }

  // ./Sua lógica vai aqui
  return (
    <Box
      styleSheet={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appConfig.theme.colors.primary[500],
        backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundBlendMode: 'multiply',
        color: appConfig.theme.colors.neutrals['000'],
      }}
    >
      <Box
        styleSheet={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
          borderRadius: '5px',
          backgroundColor: appConfig.theme.colors.neutrals[700],
          height: '100%',
          maxWidth: '95%',
          maxHeight: '95vh',
          padding: '32px',
        }}
      >
        <Header />
        <Box
          styleSheet={{
            position: 'relative',
            display: 'flex',
            flex: 1,
            height: '80%',
            backgroundColor: appConfig.theme.colors.neutrals[600],
            flexDirection: 'column',
            borderRadius: '5px',
            padding: '16px',
          }}
        >
          <MessageList mensagens={listaMensagem} />
          {/*  {listaMensagem.map(({ id, de, texto }) => {
            return (
              <li key={id}>
                {de}:{texto}
              </li>
            );
          })} */}
          <Box
            as="form"
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <TextField
              value={mensagem}
              onChange={({ target }) => {
                setMensagem(target.value);
              }}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  event.preventDefault();
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={{
                width: '100%',
                border: '0',
                resize: 'none',
                borderRadius: '5px',
                padding: '6px 8px',
                backgroundColor: appConfig.theme.colors.neutrals[800],
                marginRight: '12px',
                color: appConfig.theme.colors.neutrals[200],
              }}
            />
            <ButtonSendSticker
              onStickerClick={(sticker) => {
                console.log('[usando o componente]salva este sticker', sticker);
                handleNovaMensagem(':sticker:' + sticker);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box
        styleSheet={{
          width: '100%',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}

function MessageList(props) {
  return (
    <Box
      tag="ul"
      styleSheet={{
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse',
        flex: 1,
        color: appConfig.theme.colors.neutrals['000'],
        marginBottom: '16px',
      }}
    >
      {props.mensagens.map(({ id, texto, de }) => {
        return (
          <Text
            key={id}
            tag="li"
            styleSheet={{
              borderRadius: '5px',
              padding: '6px',
              marginBottom: '12px',
              hover: {
                backgroundColor: appConfig.theme.colors.neutrals[700],
              },
            }}
          >
            <Box
              styleSheet={{
                marginBottom: '8px',
              }}
            >
              <Image
                styleSheet={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={`https://github.com/${de}.png`}
              />
              <Text tag="strong"></Text>
              <Text
                styleSheet={{
                  fontSize: '10px',
                  marginLeft: '8px',
                  color: appConfig.theme.colors.neutrals[300],
                }}
                tag="span"
              >
                {new Date().toLocaleDateString()}{' '}
              </Text>
            </Box>

            {texto.startsWith(':sticker:') ? (
              <Image
                styleSheet={{
                  maxWidth: '100px',
                  height: '100px',

                  display: 'inline-block',
                  marginRight: '8px',
                }}
                src={texto.replace(':sticker:', '')}
              />
            ) : (
              texto
            )}
            {/*         {texto} */}
            <Box
              styleSheet={{
                position: 'relative',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                padding: '6px',
                borderRadius: '10px',
                marginTop: '6px',
                justifyContent: 'right',
                alignItems: 'center',
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              X
            </Box>
          </Text>
        );
      })}
    </Box>
  );
}
