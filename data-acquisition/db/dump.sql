-- MariaDB dump 10.19  Distrib 10.11.6-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: free_scada_db
-- ------------------------------------------------------
-- Server version	10.11.6-MariaDB-1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Alarm`
--

DROP TABLE IF EXISTS `Alarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Alarm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL DEFAULT '-',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Alarm_name_key` (`name`),
  KEY `Alarm_id_name_idx` (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Alarm`
--

LOCK TABLES `Alarm` WRITE;
/*!40000 ALTER TABLE `Alarm` DISABLE KEYS */;
/*!40000 ALTER TABLE `Alarm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Device`
--

DROP TABLE IF EXISTS `Device`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Device` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL DEFAULT '-',
  `manufacturer` varchar(191) NOT NULL DEFAULT '-',
  `model` varchar(191) NOT NULL DEFAULT '-',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Device_name_key` (`name`),
  KEY `Device_id_name_idx` (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Device`
--

LOCK TABLES `Device` WRITE;
/*!40000 ALTER TABLE `Device` DISABLE KEYS */;
/*!40000 ALTER TABLE `Device` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DeviceSupportedAlarm`
--

DROP TABLE IF EXISTS `DeviceSupportedAlarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DeviceSupportedAlarm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deviceId` int(11) NOT NULL,
  `alarmId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `DeviceSupportedAlarm_deviceId_alarmId_idx` (`deviceId`,`alarmId`),
  KEY `DeviceSupportedAlarm_alarmId_fkey` (`alarmId`),
  CONSTRAINT `DeviceSupportedAlarm_alarmId_fkey` FOREIGN KEY (`alarmId`) REFERENCES `Alarm` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `DeviceSupportedAlarm_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DeviceSupportedAlarm`
--

LOCK TABLES `DeviceSupportedAlarm` WRITE;
/*!40000 ALTER TABLE `DeviceSupportedAlarm` DISABLE KEYS */;
/*!40000 ALTER TABLE `DeviceSupportedAlarm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DeviceSupportedMeasure`
--

DROP TABLE IF EXISTS `DeviceSupportedMeasure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DeviceSupportedMeasure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deviceId` int(11) NOT NULL,
  `measureId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `DeviceSupportedMeasure_deviceId_measureId_idx` (`deviceId`,`measureId`),
  KEY `DeviceSupportedMeasure_measureId_fkey` (`measureId`),
  CONSTRAINT `DeviceSupportedMeasure_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `DeviceSupportedMeasure_measureId_fkey` FOREIGN KEY (`measureId`) REFERENCES `Measure` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DeviceSupportedMeasure`
--

LOCK TABLES `DeviceSupportedMeasure` WRITE;
/*!40000 ALTER TABLE `DeviceSupportedMeasure` DISABLE KEYS */;
/*!40000 ALTER TABLE `DeviceSupportedMeasure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DeviceSupportedProtocol`
--

DROP TABLE IF EXISTS `DeviceSupportedProtocol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DeviceSupportedProtocol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deviceId` int(11) NOT NULL,
  `protocolId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `DeviceSupportedProtocol_deviceId_protocolId_idx` (`deviceId`,`protocolId`),
  KEY `DeviceSupportedProtocol_protocolId_fkey` (`protocolId`),
  CONSTRAINT `DeviceSupportedProtocol_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `DeviceSupportedProtocol_protocolId_fkey` FOREIGN KEY (`protocolId`) REFERENCES `Protocol` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DeviceSupportedProtocol`
--

LOCK TABLES `DeviceSupportedProtocol` WRITE;
/*!40000 ALTER TABLE `DeviceSupportedProtocol` DISABLE KEYS */;
/*!40000 ALTER TABLE `DeviceSupportedProtocol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DeviceSupportedSignal`
--

DROP TABLE IF EXISTS `DeviceSupportedSignal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DeviceSupportedSignal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deviceId` int(11) NOT NULL,
  `signalId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `DeviceSupportedSignal_deviceId_signalId_idx` (`deviceId`,`signalId`),
  KEY `DeviceSupportedSignal_signalId_fkey` (`signalId`),
  CONSTRAINT `DeviceSupportedSignal_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `DeviceSupportedSignal_signalId_fkey` FOREIGN KEY (`signalId`) REFERENCES `Signal` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DeviceSupportedSignal`
--

LOCK TABLES `DeviceSupportedSignal` WRITE;
/*!40000 ALTER TABLE `DeviceSupportedSignal` DISABLE KEYS */;
/*!40000 ALTER TABLE `DeviceSupportedSignal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DeviceSupportedState`
--

DROP TABLE IF EXISTS `DeviceSupportedState`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `DeviceSupportedState` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `deviceId` int(11) NOT NULL,
  `stateId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `DeviceSupportedState_deviceId_stateId_idx` (`deviceId`,`stateId`),
  KEY `DeviceSupportedState_stateId_fkey` (`stateId`),
  CONSTRAINT `DeviceSupportedState_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `DeviceSupportedState_stateId_fkey` FOREIGN KEY (`stateId`) REFERENCES `State` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DeviceSupportedState`
--

LOCK TABLES `DeviceSupportedState` WRITE;
/*!40000 ALTER TABLE `DeviceSupportedState` DISABLE KEYS */;
/*!40000 ALTER TABLE `DeviceSupportedState` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmitedAlarm`
--

DROP TABLE IF EXISTS `EmitedAlarm`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmitedAlarm` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `deviceId` int(11) NOT NULL,
  `alarmId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `EmitedAlarm_datetime_deviceId_alarmId_idx` (`datetime`,`deviceId`,`alarmId`),
  KEY `EmitedAlarm_deviceId_fkey` (`deviceId`),
  KEY `EmitedAlarm_alarmId_fkey` (`alarmId`),
  CONSTRAINT `EmitedAlarm_alarmId_fkey` FOREIGN KEY (`alarmId`) REFERENCES `Alarm` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `EmitedAlarm_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmitedAlarm`
--

LOCK TABLES `EmitedAlarm` WRITE;
/*!40000 ALTER TABLE `EmitedAlarm` DISABLE KEYS */;
/*!40000 ALTER TABLE `EmitedAlarm` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EmitedSignal`
--

DROP TABLE IF EXISTS `EmitedSignal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EmitedSignal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `deviceId` int(11) NOT NULL,
  `signalId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `EmitedSignal_datetime_deviceId_signalId_idx` (`datetime`,`deviceId`,`signalId`),
  KEY `EmitedSignal_deviceId_fkey` (`deviceId`),
  KEY `EmitedSignal_signalId_fkey` (`signalId`),
  CONSTRAINT `EmitedSignal_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `EmitedSignal_signalId_fkey` FOREIGN KEY (`signalId`) REFERENCES `Signal` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EmitedSignal`
--

LOCK TABLES `EmitedSignal` WRITE;
/*!40000 ALTER TABLE `EmitedSignal` DISABLE KEYS */;
/*!40000 ALTER TABLE `EmitedSignal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Measure`
--

DROP TABLE IF EXISTS `Measure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Measure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `measure` varchar(191) NOT NULL,
  `unit` varchar(191) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Measure_measure_key` (`measure`),
  UNIQUE KEY `Measure_unit_key` (`unit`),
  KEY `Measure_id_measure_unit_idx` (`id`,`measure`,`unit`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Measure`
--

LOCK TABLES `Measure` WRITE;
/*!40000 ALTER TABLE `Measure` DISABLE KEYS */;
/*!40000 ALTER TABLE `Measure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Protocol`
--

DROP TABLE IF EXISTS `Protocol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Protocol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `details` varchar(191) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Protocol_name_key` (`name`),
  KEY `Protocol_id_name_idx` (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Protocol`
--

LOCK TABLES `Protocol` WRITE;
/*!40000 ALTER TABLE `Protocol` DISABLE KEYS */;
/*!40000 ALTER TABLE `Protocol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Signal`
--

DROP TABLE IF EXISTS `Signal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Signal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL DEFAULT '-',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Signal_name_key` (`name`),
  KEY `Signal_id_name_idx` (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Signal`
--

LOCK TABLES `Signal` WRITE;
/*!40000 ALTER TABLE `Signal` DISABLE KEYS */;
/*!40000 ALTER TABLE `Signal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `State`
--

DROP TABLE IF EXISTS `State`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `State` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL DEFAULT '-',
  PRIMARY KEY (`id`),
  UNIQUE KEY `State_name_key` (`name`),
  KEY `State_id_name_idx` (`id`,`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `State`
--

LOCK TABLES `State` WRITE;
/*!40000 ALTER TABLE `State` DISABLE KEYS */;
/*!40000 ALTER TABLE `State` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UpdatedMeasure`
--

DROP TABLE IF EXISTS `UpdatedMeasure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UpdatedMeasure` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `deviceId` int(11) NOT NULL,
  `measureId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UpdatedMeasure_datetime_deviceId_measureId_idx` (`datetime`,`deviceId`,`measureId`),
  KEY `UpdatedMeasure_deviceId_fkey` (`deviceId`),
  KEY `UpdatedMeasure_measureId_fkey` (`measureId`),
  CONSTRAINT `UpdatedMeasure_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `UpdatedMeasure_measureId_fkey` FOREIGN KEY (`measureId`) REFERENCES `Measure` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UpdatedMeasure`
--

LOCK TABLES `UpdatedMeasure` WRITE;
/*!40000 ALTER TABLE `UpdatedMeasure` DISABLE KEYS */;
/*!40000 ALTER TABLE `UpdatedMeasure` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `UpdatedSate`
--

DROP TABLE IF EXISTS `UpdatedSate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `UpdatedSate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `deviceId` int(11) NOT NULL,
  `newStateId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UpdatedSate_datetime_deviceId_newStateId_idx` (`datetime`,`deviceId`,`newStateId`),
  KEY `UpdatedSate_deviceId_fkey` (`deviceId`),
  KEY `UpdatedSate_newStateId_fkey` (`newStateId`),
  CONSTRAINT `UpdatedSate_deviceId_fkey` FOREIGN KEY (`deviceId`) REFERENCES `Device` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `UpdatedSate_newStateId_fkey` FOREIGN KEY (`newStateId`) REFERENCES `State` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `UpdatedSate`
--

LOCK TABLES `UpdatedSate` WRITE;
/*!40000 ALTER TABLE `UpdatedSate` DISABLE KEYS */;
/*!40000 ALTER TABLE `UpdatedSate` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-01  6:57:08
