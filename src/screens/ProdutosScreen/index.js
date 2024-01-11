import { Text } from "react-native";

export default function ProdutosScreen(props) {
    
    console.log(props.route.params.produto_id);

    return (
        <Text>Produtos - {props.route.params.produto_id}</Text>
    )
}