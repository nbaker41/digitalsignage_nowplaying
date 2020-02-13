--
-- Indexes for table `buildings`
--
ALTER TABLE `buildings`
  ADD PRIMARY KEY (`building_id`);

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customers_buildings`
--
ALTER TABLE `customers_buildings`
  ADD PRIMARY KEY (`customer_id`,`building_id`);

--
-- Indexes for table `customers_departments`
--
ALTER TABLE `customers_departments`
  ADD PRIMARY KEY (`customer_id`,`department_id`);

--
-- Indexes for table `customers_schools`
--
ALTER TABLE `customers_schools`
  ADD PRIMARY KEY (`customer_id`,`school_id`);

--
-- Indexes for table `customers_users`
--
ALTER TABLE `customers_users`
  ADD PRIMARY KEY (`customer_id`,`user_id`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `directories`
--
ALTER TABLE `directories`
  ADD PRIMARY KEY (`directory_id`);

--
-- Indexes for table `floors`
--
ALTER TABLE `floors`
  ADD PRIMARY KEY (`floor_id`);

--
-- Indexes for table `media`
--
ALTER TABLE `media`
  ADD PRIMARY KEY (`media_id`);

--
-- Indexes for table `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`player_id`);

--
-- Indexes for table `players_playlists`
--
ALTER TABLE `players_playlists`
  ADD PRIMARY KEY (`player_id`,`album_id`);

--
-- Indexes for table `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`album_id`);

--
-- Indexes for table `playlists-directories`
--
ALTER TABLE `playlists_directories`
  ADD PRIMARY KEY (`album_id`,`directory_id`);

--
-- Indexes for table `playlists_media`
--
ALTER TABLE `playlists_media`
  ADD PRIMARY KEY (`album_id`,`media_id`);

--
-- Indexes for table `schools`
--
ALTER TABLE `schools`
  ADD PRIMARY KEY (`school_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);


--
-- Constraints for dumped tables
--
