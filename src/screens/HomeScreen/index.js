import { Button, Text } from "react-native";

export default function HomeScreen(props) {

    console.log(props)
     
    function pageProdutos() {
        props.navigation.navigate('Produtos', {
            produto_id: 10
        })
    }

    return (
        <>
            <Text>Home</Text>
            {/* <Button onPress={() => props.navigation.navigate('Produtos')} color="pink" title="Produtos"/> */}
            <Button onPress={pageProdutos} color="pink" title="Produtos"/>
        </>
    )
}