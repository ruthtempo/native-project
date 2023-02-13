import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import { CustomersList } from "../../features/customers/CustomersList";

// top level display component only - declares a view that will be part of navigation
export const Customers = () => (
  <SafeAreaView>
    <ScrollView>
      <CustomersList />
    </ScrollView>
  </SafeAreaView>
);
