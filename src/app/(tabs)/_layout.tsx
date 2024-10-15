import { Tabs } from 'expo-router';
import React from 'react';
import { FontAwesome6 } from '@expo/vector-icons'; // Importing icon library

import { TabBarIcon } from '@/src/components/navigation/TabBarIcon';
import { Colors } from '@/src/constants/Colors';
import { useColorScheme } from '@/src/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Workout', // Replacing 'Explore' with 'Workout'
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome6 
              name={focused ? 'dumbbell' : 'dumbbell'} // Using dumbbell icons
              size={24}
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}
