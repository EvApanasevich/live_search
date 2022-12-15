export default function insertMark(arrSearchResult) {

   const stringWithMarkers = arrSearchResult.reduce((resultStr, e) => {

      const markerTag = '<mark></mark>';
      const startOfString = e.input.slice(0, e.index);
      const endOfString = e.input.slice(e.index + e[0].length);
      const partBetweenMarkedSearchParts = e.input.slice(resultStr.length - markerTag.length * arrSearchResult.indexOf(e), e.index);
      const markedSearchPart = '<mark>' + e.input.slice(e.index, e.index + e[0].length) + '</mark>';

      if (!resultStr.length) {
         if (arrSearchResult.length === 1) {
            return startOfString + markedSearchPart + endOfString;
         } else {
            return startOfString + markedSearchPart;
         };
      } else {
         if (arrSearchResult.length - 1 === arrSearchResult.indexOf(e)) {
            return resultStr + partBetweenMarkedSearchParts + markedSearchPart + endOfString;
         } else {
            return resultStr + partBetweenMarkedSearchParts + markedSearchPart;
         };
      };
   }, '');
   return stringWithMarkers;
};