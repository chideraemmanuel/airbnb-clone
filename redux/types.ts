export interface StoreTypes {
  dateRange: {
    range: {
      startDate: Date;
      endDate: null | Date;
      key: "selection";
    }[];
  };

  navigation: {
    isTopRightNavActive: boolean;
  };
}

export interface NavigationStateTypes {
  isTopRightNavActive: boolean;
}

export interface DateRangeTypes {
  range: {
    // startDate: Date;
    startDate: null | Date;
    endDate: null | Date;
    key: "selection";
  }[];
}
