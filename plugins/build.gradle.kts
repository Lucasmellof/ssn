plugins {
    kotlin("jvm") version "1.7.21"
}

group = "com.doceazedo.ssn"
version = "0.1-BETA"

repositories {
    mavenCentral()
}

allprojects {
    repositories {
        mavenCentral()

        maven("https://papermc.io/repo/repository/maven-public/")
        maven("https://hub.spigotmc.org/nexus/content/repositories/snapshots/")

        maven("https://oss.sonatype.org/content/repositories/snapshots")
        maven("https://oss.sonatype.org/content/repositories/central")
    }
}


