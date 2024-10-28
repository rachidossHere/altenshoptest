
namespace Route {
    export const ROOT:      ''    = '';
    export const WILDCARD:  '**'  = '**';
  
    export namespace Feature {
      export const INDEX:           ''      = '';
  
      export const WILDCARD:  '**'    = '**';
      export const CART:      string  = 'cart';
      export const CONTACT:   string  = 'contact';
      export const SHOP:      string  = 'shop';
  
      export const DEFAULT:   string  = SHOP;
    }
  
    export const DEFAULT:   string  = Feature.SHOP;
  }
  
  
  export const APP_ROUTE_ROOT:      string  = Route.ROOT;
  export const APP_ROUTE_DEFAULT:   string  = Route.DEFAULT;
  export const APP_ROUTE_WILDCARD:  string  = Route.WILDCARD;
  
  export const APP_ROUTE_FEATURE:                                   string  = Route.Feature.INDEX;
  export const APP_ROUTE_FEATURE_CART:                              string  = Route.Feature.CART;
  export const APP_ROUTE_FEATURE_CONTACT:                           string  = Route.Feature.CONTACT;
  export const APP_ROUTE_FEATURE_SHOP:                              string  = Route.Feature.SHOP;

  
  export const APP_ROUTE_FEATURE_DEFAULT:   string  = Route.Feature.DEFAULT;
  export const APP_ROUTE_FEATURE_WILDCARD:  string  = Route.Feature.WILDCARD;
  