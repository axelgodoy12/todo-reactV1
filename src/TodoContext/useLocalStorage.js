import React from "react";  

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const LocalStorageItem = localStorage.getItem('itemName');
        let parsedItem;
        
        if (!LocalStorageItem) {
          localStorage.setItem('itemName', JSON.stringify([initialValue]))
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(LocalStorageItem);
        }
        
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error)
      }
    }, 1000);
  });
  
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error)
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
};
}

export { useLocalStorage };