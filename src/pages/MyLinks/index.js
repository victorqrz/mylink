import React, { useState, useEffect } from 'react';
import { Modal } from 'react-native';

import Menu from '../../components/Menu';
import StatusBarPage from '../../components/StatusBarPage'
import { Container, Title, ListLinks } from './styles';
import ListItem from '../../components/ListItem';
import { useIsFocused } from '@react-navigation/native';
import ModalLink from '../../components/ModalLink';

import { getLinksSaved } from '../../utils/storelinks';

export default function MyLinks(){
  const isFocused = useIsFocused();

  const [links, setLinks] = useState([]);
  const [data, setData] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSaved('sujeitoLinks');
      setLinks(result);
    }

    getLinks();
  }, [isFocused]);

  function handleItem(item){
    setData(item);
    setModalVisible(true);
  }

  return(
    <Container>

      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#132742"
      />
      <Menu />
      
      <Title>Meus links</Title>

      <ListLinks
        data={links}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) =>  <ListItem data={item} selectedItem={handleItem} />}
        contentContainerStyle={{ paddingBottom: 25 }}
        showsVerticalScrollIndicator={false}
      />

      <Modal 
        visible={modalVisible} 
        transparent 
        animationType="slide"
      >
        <ModalLink onClose={() => setModalVisible(false)} data={data}/>
      </Modal>
    </Container>
  );
}