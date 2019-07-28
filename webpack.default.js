import path from 'path';

export default {
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      constants: path.resolve(__dirname, 'src/constants/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      decorators: path.resolve(__dirname, 'src/decorators/'),
      propTypes: path.resolve(__dirname, 'src/propTypes/'),
      reducers: path.resolve(__dirname, 'src/reducers/'),
      selectors: path.resolve(__dirname, 'src/selectors/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
  },
};
