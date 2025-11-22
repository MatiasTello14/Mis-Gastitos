import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollViewContent: {
     flexGrow: 1,
     justifyContent: 'center',  
     alignItems: 'center',      
     padding: 15,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20
  },
  imageWrapper: {
  width: "100%",
  height: 220,               
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#f7f7f7",
  borderRadius: 12,
  marginBottom: 15,
},

detailImage: {
  width: "100%",
  height: "100%",
},

  infoCard: {
    width: '95%',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  descripcionContainer: {
    alignItems: 'center',
    gap: 8,
  },


  nombreDetalle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  montoDetalle: {
    fontSize: 18,
    color: '#555',
  },
  montoValor: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  fechaDetalle: {
    fontSize: 16,
    color: '#777',
  },
  categoriaDetalle: {
    fontSize: 16,
    color: '#777',
    fontStyle: 'italic',
  },

  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginTop: 30,
    width: '90%',
  }
});

export default styles;