import { Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';



const famous = require('../Utils/famous.json');


const Category = () => {
    const [selected, setSelected] = useState(0);
    const productPortfolio = ['book', 'selling', 'famous', 'lightnovel', 'romance', 'science'];

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={productPortfolio}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    onPress={() =>
                        setSelected(index)
                    }
                    activeOpacity={0.5}
                    style={{
                        marginRight: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        backgroundColor: selected === index ? 'green' : '#E3E3E3',
                        height: 20
                    }}
                >
                    <Text style={{ color: selected === index ? '#007FFF' : 'grey' }}>
                        {item}
                    </Text>
                </TouchableOpacity>
            )}

        />
    )
}

export default Category