setup:
	${ANDROID_HOME}/tools/bin/sdkmanager --install emulator  
	${ANDROID_HOME}/tools/bin/avdmanager create avd -n Pixel_3_API_30_AOSP -d pixel --package "system-images;android-31;default;x86_64"
