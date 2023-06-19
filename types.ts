export interface propertyTypes {
  _id: number;

  title: string;

  description: string;

  prices: {
    withTax: number;
    withoutTax: number;
  };

  safetyMeasures: string[];

  category: {
    // _ref: string;
    categoryName: string;
  };

  // mainImage: {
  //   asset: {
  //     _ref: string;
  //   };
  // };

  mainImage: {
    asset: any;
  };

  otherImages: {
    asset: {
      _ref: string;
    };
  }[];

  location: {
    country: string;
    city: string;
    geopoint: {
      lat: number;
      lng: number;
    };
  };

  amenities: {
    // _ref: number;
    amenityTitle: string;
  }[];
  room: "dedicated" | "shared";

  bathroom: "dedicated" | "shared";

  bedType: "double-bed" | "queen-bed" | "single-bed";

  rating: string;

  reviews: {
    reviewGiver: {
      firstName: string;
      lastName: string;
      profileImage: {
        asset: any;
      };
    };
    reviewDate: string;
    review: string;
  }[];

  availableDates: {
    from: string;
    to: string;
  };

  cancellationPolicy: {
    fullCancellationPolicy: string;
    durationInHours: 48 | 24 | 0;
  };

  propertyHosts: {
    host: {
      primaryDetails: {
        firstName: string;
        lastName: string;
        profileImage: {
          asset: any;
        };
      };
      about: {
        description: string;
        occupation?: string;
        favoriteSongInHighSchool?: string;
        pets?: string;
        courtesy?: string;
        school?: string;
        uniqueAttributes?: string;
        language?: string;
      };
    };
    cohosts: {
      firstName: string;
      lastName: string;
      profileImage: {
        asset: {
          _ref: string;
        };
      };
    }[];
  };

  houseRules: string[];

  otherGuests: boolean;
}

// INDIVIDUAL TYPES

export interface HostTypes {
  primaryDetails: {
    firstName: string;
    lastName: string;
    profileImage: {
      asset: any;
    };
  };
  about: {
    description: string;
    occupation?: string;
    favoriteSongInHighSchool?: string;
    pets?: string;
    courtesy?: string;
    school?: string;
    uniqueAttributes?: string;
    language?: string;
  };
}

export interface CohostsTypes {
  firstName: string;
  lastName: string;
  profileImage: {
    asset: any;
  };
}

export interface ReviewsTypes {
  reviewGiver: {
    firstName: string;
    lastName: string;
    profileImage: {
      asset: any;
    };
  };
  reviewDate: string;
  review: string;
}
