import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm")
}

dependencies {
    api("org.spigotmc:spigot-api:1.12.2-R0.1-SNAPSHOT")
    api("io.github.waterfallmc:waterfall-api:1.18-R0.1-SNAPSHOT")
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}
