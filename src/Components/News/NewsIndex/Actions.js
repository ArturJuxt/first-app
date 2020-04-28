export const inc = (name) => ({ type: 'INC', payload: name });

export const dec = () => ({ type: 'DEC' });

export const rnd = (payload) => ({ type: 'RND', payload });
