export default (value: any, config:object = {}) => {
  const formatter = new Intl.NumberFormat('en-US', config);
  
  return formatter.format(value);
}