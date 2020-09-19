function formatCurrency(arg) {
  return 'Rp' + arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

function formatBankName(arg) {
  if (arg.length > 4) {
    return arg.charAt(0).toUpperCase() + arg.substr(1, arg.length);
  } else {
    return arg.toUpperCase();
  }
}
function formatName(arg) {
  return arg.toUpperCase();
}
function formatDate(date) {
  let current_datetime = new Date(date);
  let months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  let formatted_date =
    current_datetime.getDate() +
    ' ' +
    months[current_datetime.getMonth()] +
    ' ' +
    current_datetime.getFullYear();

  return formatted_date;
}

function filterByNameAZ(arr) {
  arr &&
    arr.sort(function (a, b) {
      let alc = a.beneficiary_name.toLowerCase(),
        blc = b.beneficiary_name.toLowerCase();
      return alc > blc ? 1 : alc < blc ? -1 : 0;
    });

  return arr;
}

function filterByNameZA(arr) {
  arr &&
    arr.sort(function (a, b) {
      let blc = a.beneficiary_name.toLowerCase(),
        alc = b.beneficiary_name.toLowerCase();
      return alc > blc ? 1 : alc < blc ? -1 : 0;
    });

  return arr;
}

function filterByTglBaru(arr) {
  arr &&
    arr.sort(function (a, b) {
      return new Date(b.created_at) - new Date(a.created_at);
    });

  return arr;
}

function filterByTglLama(arr) {
  arr &&
    arr.sort(function (a, b) {
      return new Date(a.created_at) - new Date(b.created_at);
    });

  return arr;
}

function searchFilter(text, arr) {
  const newData =
    arr &&
    arr.filter((item) => {
      const itemData = `${item.beneficiary_bank.toUpperCase()} ${item.beneficiary_name.toUpperCase()} ${item.sender_bank.toUpperCase()} ${
        item.amount
      }`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
  return newData;
}

export {
  formatCurrency,
  formatBankName,
  formatName,
  formatDate,
  filterByNameAZ,
  filterByNameZA,
  filterByTglBaru,
  filterByTglLama,
  searchFilter,
};
