const ModalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.6)',
    zIndex           : '10'
  },
  content : {
    position                   : 'fixed',
    top                        : '50%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : 'none',
    background                 : '#2B2B2B',
    // background                 : '#f3f3f3',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    // borderRadius               : '25px',
    outline                    : 'none',
    padding                    : '40px 50px',
    opacity                    : "0",
    transition                 : 'opacity 0.75s',
    transform                  : 'translate(-50%, -50%)'
  }
}


export default ModalStyle;
