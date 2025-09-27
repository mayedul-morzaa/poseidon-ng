// geo means 'geographical constants'

export const divisions = [
  { value: 'Dhaka', label: 'Dhaka' },
  { value: 'Chattogram', label: 'Chattogram' },
  { value: 'Rajshahi', label: 'Rajshahi' },
  { value: 'Khulna', label: 'Khulna' },
  { value: 'Barisal', label: 'Barisal' },
  { value: 'Sylhet', label: 'Sylhet' },
  { value: 'Rangpur', label: 'Rangpur' },
  { value: 'Mymensingh', label: 'Mymensingh' }
];

export const districtsByDivision: Record<string, { value: string; label: string }[]> = {
  Dhaka: [
    { value: 'Dhaka', label: 'Dhaka' },
    { value: 'Faridpur', label: 'Faridpur' },
    { value: 'Gazipur', label: 'Gazipur' },
    { value: 'Gopalganj', label: 'Gopalganj' },
    { value: 'Kishoreganj', label: 'Kishoreganj' },
    { value: 'Madaripur', label: 'Madaripur' },
    { value: 'Manikganj', label: 'Manikganj' },
    { value: 'Munshiganj', label: 'Munshiganj' },
    { value: 'Narayanganj', label: 'Narayanganj' },
    { value: 'Narsingdi', label: 'Narsingdi' },
    { value: 'Rajbari', label: 'Rajbari' },
    { value: 'Shariatpur', label: 'Shariatpur' },
    { value: 'Tangail', label: 'Tangail' }
  ],
  Chattogram: [
    { value: 'Bandarban', label: 'Bandarban' },
    { value: 'Brahmanbaria', label: 'Brahmanbaria' },
    { value: 'Chandpur', label: 'Chandpur' },
    { value: 'Chattogram', label: 'Chattogram' },
    { value: 'Cumilla', label: 'Cumilla' },
    { value: 'Cox’s Bazar', label: 'Cox’s Bazar' },
    { value: 'Feni', label: 'Feni' },
    { value: 'Khagrachari', label: 'Khagrachari' },
    { value: 'Lakshmipur', label: 'Lakshmipur' },
    { value: 'Noakhali', label: 'Noakhali' },
    { value: 'Rangamati', label: 'Rangamati' }
  ],
  Rajshahi: [
    { value: 'Bogura', label: 'Bogura' },
    { value: 'Joypurhat', label: 'Joypurhat' },
    { value: 'Naogaon', label: 'Naogaon' },
    { value: 'Natore', label: 'Natore' },
    { value: 'Chapainawabganj', label: 'Chapainawabganj' },
    { value: 'Pabna', label: 'Pabna' },
    { value: 'Rajshahi', label: 'Rajshahi' },
    { value: 'Sirajganj', label: 'Sirajganj' }
  ],
  Khulna: [
    { value: 'Bagerhat', label: 'Bagerhat' },
    { value: 'Chuadanga', label: 'Chuadanga' },
    { value: 'Jashore', label: 'Jashore' },
    { value: 'Jhenaidah', label: 'Jhenaidah' },
    { value: 'Khulna', label: 'Khulna' },
    { value: 'Kushtia', label: 'Kushtia' },
    { value: 'Magura', label: 'Magura' },
    { value: 'Meherpur', label: 'Meherpur' },
    { value: 'Narail', label: 'Narail' },
    { value: 'Satkhira', label: 'Satkhira' }
  ],
  Barisal: [
    { value: 'Barguna', label: 'Barguna' },
    { value: 'Barisal', label: 'Barisal' },
    { value: 'Bhola', label: 'Bhola' },
    { value: 'Jhalokathi', label: 'Jhalokathi' },
    { value: 'Patuakhali', label: 'Patuakhali' },
    { value: 'Pirojpur', label: 'Pirojpur' }
  ],
  Sylhet: [
    { value: 'Habiganj', label: 'Habiganj' },
    { value: 'Moulvibazar', label: 'Moulvibazar' },
    { value: 'Sunamganj', label: 'Sunamganj' },
    { value: 'Sylhet', label: 'Sylhet' }
  ],
  Rangpur: [
    { value: 'Dinajpur', label: 'Dinajpur' },
    { value: 'Gaibandha', label: 'Gaibandha' },
    { value: 'Kurigram', label: 'Kurigram' },
    { value: 'Lalmonirhat', label: 'Lalmonirhat' },
    { value: 'Nilphamari', label: 'Nilphamari' },
    { value: 'Panchagarh', label: 'Panchagarh' },
    { value: 'Rangpur', label: 'Rangpur' },
    { value: 'Thakurgaon', label: 'Thakurgaon' }
  ],
  Mymensingh: [
    { value: 'Jamalpur', label: 'Jamalpur' },
    { value: 'Mymensingh', label: 'Mymensingh' },
    { value: 'Netrokona', label: 'Netrokona' },
    { value: 'Sherpur', label: 'Sherpur' }
  ]
};
