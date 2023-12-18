import React from 'react';

const PublishersTable = () => {
  const publishersData = [
    {
      id: 1,
      name: 'Publisher 1',
      articles: 10,
      imageUrl: 'eyeicon.png', // Replace with the actual image path
    },
    {
      id: 2,
      name: 'Publisher 2',
      articles: 15,
      imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.28jmE4s4hgzuaJnqvGffRQHaHa&pid=Api&P=0&h=220', // Replace with the actual image path
    },
    // Add more publishers as needed
  ];

  const styles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#f2f2f2',
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '12px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    image: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      marginRight: '10px',
    },
  };

  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.th}>Publisher</th>
          <th style={styles.th}>Articles Posted</th>
        </tr>
      </thead>
      <tbody>
        {publishersData.map((publisher) => (
          <tr key={publisher.id}>
            <td style={styles.td}>
              <img src={publisher.imageUrl} alt={publisher.name} style={styles.image} />
              {publisher.name}
            </td>
            <td style={styles.td}>{publisher.articles}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PublishersTable;
