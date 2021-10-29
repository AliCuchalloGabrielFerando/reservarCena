import React from 'react'
import { View, Text, Button, SafeAreaView,FlatList,ScrollView } from 'react-native'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import MenuController from './DeSemana/MenuController'
import tailwind from 'tailwind-rn';
export default function TodayController() {
    return (
        <ScrollView >
        <Collapse isExpanded={true}>
            <CollapseHeader>
                <SafeAreaView style={tailwind('h-content')}>
                    <View style={tailwind('pt-12 items-center')}>
                        <View style={tailwind('bg-blue-200 px-3 py-3 rounded-full w-full')}>
                            <Text style={tailwind('text-blue-800 font-semibold')}>
                                Hello Tailwind
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </CollapseHeader>
            <CollapseBody>
                <MenuController></MenuController>
            </CollapseBody>
        </Collapse>
        <Collapse style={tailwind('pb-12')}>
            <CollapseHeader>
                <SafeAreaView style={tailwind('h-content')}>
                    <View style={tailwind('pt-12 items-center')}>
                        <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
                            <Text style={tailwind('text-blue-800 font-semibold')}>
                                Hello Tailwind
                            </Text>
                        </View>
                    </View>
                </SafeAreaView>
            </CollapseHeader>
            <CollapseBody>
                <MenuController></MenuController>
            </CollapseBody>
        </Collapse>
        </ScrollView>
    )
}



