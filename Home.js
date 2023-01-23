import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonButton from './commonButton'
import CommonTextInput  from './commonTextInput'

export default function Home() {

    const [details,setDetails]= useState([
        {name:'',frequency:'',duration:'',isadded:false}
    ])

    const Additem=(index,item)=>{
        let data=Object.assign([],details, { [index]:{...item,isadded:true}});
        data.push({name:'',frequency:'',duration:'',isadded:false})
        setDetails(data);
    }

    const Removeitem=(index)=>{
        setDetails(details.filter((vari, i) => i !== index));
    }
   
  return (
    <View style={styles.mainView}>
        <View style={styles.headingView}>
            <Text style={styles.headingText}>Add Medicine</Text>
        </View>
        <FlatList 
        data={details}
        renderItem={({item,index})=>{
            return(
                <View>
                <CommonTextInput 
                label='Medicine Name'
                value={item.name}
                onChangeText={text => {
                    setDetails(Object.assign([], details, {[index]: {...item, name: text}}))
                }} 
                />
                <View style={styles.itemView}> 
                <CommonTextInput 
                label='Frequency' 
                value={item.frequency}
                keyboardType='numeric'
                textInputStyle={styles.input}
                onChangeText={text => {
                    setDetails(Object.assign([], details, {[index]: {...item, frequency: text}}))
                }} />
                <CommonTextInput 
                label='Duration' 
                value={item.duration}
                keyboardType='numeric'
                textInputStyle={styles.input}
                onChangeText={text => {
                    setDetails(Object.assign([], details, {[index]: {...item, duration: text}}))
                }} />
                </View>
                {item.isadded ?
                (
                <CommonButton title='Remove Item' onPress={()=>Removeitem(index)} style={{backgroundColor:'red'}}/>
                ):
                (
                <CommonButton title='Add Item' onPress={()=>Additem(index,item)}/>
                )
                }
                </View>
            )
        }}
        />
     
    </View>
  )
}

const styles = 
    StyleSheet.create({
        mainView:{
                flex:1
        },
        headingView:{
            backgroundColor:'#06213d',
            justifyContent:'center'
        },
        headingText:{
            color:'white',
            fontSize:40,
            alignSelf:'center'
        },
        itemView:{
            flexDirection:'row',
            flex:1
        },
        input:{
            width:160
        }
    })