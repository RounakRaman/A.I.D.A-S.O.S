# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: streamlit/proto/WidgetStates.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import builder as _builder
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from streamlit.proto import Common_pb2 as streamlit_dot_proto_dot_Common__pb2
from streamlit.proto import Components_pb2 as streamlit_dot_proto_dot_Components__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\"streamlit/proto/WidgetStates.proto\x1a\x1cstreamlit/proto/Common.proto\x1a streamlit/proto/Components.proto\"-\n\x0cWidgetStates\x12\x1d\n\x07widgets\x18\x01 \x03(\x0b\x32\x0c.WidgetState\"\xa1\x03\n\x0bWidgetState\x12\n\n\x02id\x18\x01 \x01(\t\x12\x17\n\rtrigger_value\x18\x02 \x01(\x08H\x00\x12\x14\n\nbool_value\x18\x03 \x01(\x08H\x00\x12\x16\n\x0c\x64ouble_value\x18\x04 \x01(\x01H\x00\x12\x13\n\tint_value\x18\x05 \x01(\x12H\x00\x12\x16\n\x0cstring_value\x18\x06 \x01(\tH\x00\x12*\n\x12\x64ouble_array_value\x18\x07 \x01(\x0b\x32\x0c.DoubleArrayH\x00\x12\'\n\x0fint_array_value\x18\x08 \x01(\x0b\x32\x0c.SInt64ArrayH\x00\x12*\n\x12string_array_value\x18\t \x01(\x0b\x32\x0c.StringArrayH\x00\x12\x14\n\njson_value\x18\n \x01(\tH\x00\x12\"\n\x0b\x61rrow_value\x18\x0b \x01(\x0b\x32\x0b.ArrowTableH\x00\x12\x15\n\x0b\x62ytes_value\x18\x0c \x01(\x0cH\x00\x12\x37\n\x19\x66ile_uploader_state_value\x18\r \x01(\x0b\x32\x12.FileUploaderStateH\x00\x42\x07\n\x05valueb\x06proto3')

_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, globals())
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'streamlit.proto.WidgetStates_pb2', globals())
if _descriptor._USE_C_DESCRIPTORS == False:

  DESCRIPTOR._options = None
  _WIDGETSTATES._serialized_start=102
  _WIDGETSTATES._serialized_end=147
  _WIDGETSTATE._serialized_start=150
  _WIDGETSTATE._serialized_end=567
# @@protoc_insertion_point(module_scope)
