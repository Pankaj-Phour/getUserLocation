// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // First I (Pankaj Phour) hosted my node api on heroku app's free tier but then on november 28th their free tier plan no longer existed
  // Then i hosted the project on render's free tier 
  // And replace the heroku live url with render live url 
  // url: 'https://pankajphour-locationapi.herokuapp.com'
  url: 'https://locationapi.onrender.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
