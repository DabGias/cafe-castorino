import { StyleSheet, Image } from "react-native";

function Products(props) {
    return(
        <Image
            source={require({props.url})}
            style={styles.image}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 40,
        width: 200, 
        height: 200,
        borderRadius: 20
      },
})

export default Products