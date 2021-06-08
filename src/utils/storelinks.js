import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSaved(key){
  const myLinks = await AsyncStorage.getItem(key);

  let links = JSON.parse(myLinks) || [];

  return links;
}

export async function saveLink(key, newLink){
  let linksStored = await getLinksSaved(key);

  const hasLink = linksStored.some( link => link.id === newLink.id );

  if(hasLink){
    console.log('ESSE LINK JÁ EXISTE NA LISTA');
    return;
  }

  linksStored.push(newLink);
  await AsyncStorage.setItem(key, JSON.stringify(linksStored));
  console.log('LINK SALVO COM SUCESSO');
}

export async function deleteLink(links, id){
  
}